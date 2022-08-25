import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './Style.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          reducedData: [],
          results: [],
          perPage: 10,
          currentPage: 0,
          errorMessage: " ",
          criteria:"All",
          criteriaString:"",
          orignalresults:[],
          count:0
        };
    
       
    }

    handleSelect = (e) =>
    {
      //update criteria
      this.setState({criteria:e.target.value},()=>{
        console.log(this.state.criteria+"TTTT")
        if(this.state.criteria=="All")
        {
            console.log("Calling");
            this.getData();
        }
      }
      )
     
    }

    handleChange = (e) =>
    {
      this.setState({criteriaString:e.target.value})
      console.log(this.state.criteriaString)
      if(this.state.criteria=="Author")
      {
           var filt=this.state.originalresults.filter(product=>product.Author.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           //console.log("Testing"+JSON.stringify(filt)+" Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getData1(filt)
           })
     
      }
      else if(this.state.criteria=="Title")
      {
           var filt=this.state.originalresults.filter(product=>product.Title.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           //console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getData1(filt)
           })
     
      }

      else if(this.state.criteria=="Subject")
      {
           var filt=this.state.originalresults.filter(product=>product.Subject.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           //console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getData1(filt)
           })
     
      }
      else if(this.state.criteria=="Publishdate")
      {
           var filt=this.state.originalresults.filter(product=>product.Publishdate.toLowerCase().includes(this.state.criteriaString.toLowerCase()))
           //console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
           this.setState({count:filt.length},()=>{
               this.getData1(filt)
           })
     
      }


    }



    getData1=(filt)=>
    {

      var res1=filt;
      //console.log("Getting data based on filter"+JSON.stringify(res1))
      var data = res1;

      this.setState({offset:0})

      var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

      this.setState({

        pageCount: Math.ceil(data.length / this.state.perPage),
        results: res1,
        reducedData: slice
      }
      )



    }

    componentDidMount() {
      this.getData()
    }


    getData =()=> {

          var res1=require("./books.json")
          console.log(res1)

          var data = res1;
          this.setState({count:res1.length})
          var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
  
          this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            results: res1,
            reducedData: slice,
            originalresults:res1
          }
          )
      
    }
  
    loadMoreData=()=>
    {
      const data = this.state.results;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        reducedData: slice
      })
    }

    handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;
  
      this.setState({
        currentPage: selectedPage,
        offset: offset
      }, () => {
        this.loadMoreData()
      });
  
    };


    render() {
      return (
        <>
        <div id="bodyL">
          <h5>Welcome back {this.props.username}</h5>
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={3}
            pageRangeDisplayed={4}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerC667lassName={"pages pagination"}
            activeClassName={"active"}
          />

          
         
         <h4>Filtering Criteria &nbsp; &nbsp;
          <select name="dhanush" onChange={this.handleSelect}>
                <option value="All" selected>All</option>
                <option value="Title"> Title</option>
                <option value="Author">Author</option>
                <option value="Subject">Subject</option>
                <option value="Publishdate">Publishdate</option>
          </select>

          &nbsp; &nbsp; 
         <input type="text" placeholder="Type the value for Filtering " onChange={this.handleChange}
          value={this.state.criteriaString}/>
          </h4>
          <br/>
          <br/>
          <div>
             <table className='table table-lg table-hover table-dark' border={1}>
                    <thead id="tid" className='thead-dark'>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Subject</td>
                        <td>Publishdate</td>
                    </tr>
                    </thead>
              {  console.log(this.state.criteria+"---"+this.state.criteriaString)}
               {this.state.reducedData.length 
              ? this.state.reducedData.map((product) => (
              

                
                    <tr id="tableval" key={product.ISBN}>
                      <td>  {product.Title} </td>
                      <td>  {product.Author} </td>
                      <td>  {product.Subject} </td>
                      <td>  {product.Publishdate} </td>
                    </tr>
                 
                
              ))
              : null}
              </table>
              </div>
            {this.state.errorMessage ? <div> {this.state.errorMessage}</div> : null}
         <h4 className='alert alert-success'>Total count of {this.state.criteria}  {this.state.criteriaString} is: {this.state.count}</h4>
        </div>
        <a href="/Logout" style={{textDecoration:'none',color:'black',margin:'30px'}}> 
        <span
        className="display-6">Logout</span></a>
        </>
  
  
      )
    }
  
  
  
  
  
  
   
  

}