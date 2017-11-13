import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';


class ReposLanguage extends Component{

    constructor(props){
        super(props);
        this.state={
            page:1,
            language:'',
            activeItems:[],
            term:''
        }

    }

    onNext(){
        let Newpage=this.state.page;
        Newpage+=1; 
        let val=this.props.getLang;
        let item={name:val};
        this.props.fetchRepos(item,Newpage);
        this.setState({page:Newpage});
    }

    onPrev(){
        let Newpage=this.state.page;
        Newpage-=1;
        if(Newpage<1){
            Newpage=1;
        }        
        let val=this.props.getLang;
        let item={name:val};
        this.props.fetchRepos(item,Newpage);
        this.setState({page:Newpage});
    }

    onChange(event){
        this.props.searchRepo(event.target.value,this.props.getLang);
        let v=event.target.value;
        this.setState({term:v});
        if(this.props.searchTerm){
            let val=this.props.searchTerm;
            this.setState({activeItems:val});
        }
        console.log(this.state.activeItems);
    }

    
   
    renderRepo(){
        if(this.props.searchTerm.data && this.state.term!==''){
            if(this.props.searchTerm.data){
                return this.props.searchTerm.data.items.map(item=>{
                    return(
                        <div key={item.id}>
                            <br/>                        
                            <div className="card container">
                                <div className="card-body row">
                                    <img className="img-responsive" style={{height:100,width:100}} src={item.owner.avatar_url}/>
                                    <div className="col-sm-8">
                                        <div className="row">
                                            <h3 className="card-title col-sm-12">{item.owner.login}</h3>
                                            <h6 className="card-subtitle col-sm-12 mb-2 text-muted">Score: {item.score}</h6>
                                            <p className="card-text col-sm-12">{item.description}</p>
                                            <div className="col-sm-12">
                                                <span className="badge badge-success">Forks:{item.forks}</span>&nbsp;
                                                <span className="badge badge-dark">Watchers:{item.watchers}</span>&nbsp;
                                                <span className="badge badge-danger">Issues:{item.open_issues}</span>
                                            </div>    
                                        </div>
                                    </div>                            
                                </div>    
                            </div>
                        </div>    
                    );
                });            
            }

        }
        if(this.props.RepoLang.data && this.state.term===''){
            return this.props.RepoLang.data.items.map(item=>{
                return(
                    <div key={item.id}>
                        <br/>                        
                        <div className="card">
                            <div className="card-body row">
                                <img className="img-responsive" style={{height:100,width:100}} src={item.owner.avatar_url}/>
                                <div className="col-sm-8">
                                    <div className="row">
                                        <h3 className="card-title col-sm-12">{item.owner.login}</h3>
                                        <h6 className="card-subtitle col-sm-12 mb-2 text-muted">Score: {item.score}</h6>
                                        <p className="card-text col-sm-12">{item.description}</p>
                                        <div className="col-sm-12">
                                            <span className="badge badge-success">Forks:{item.forks}</span>&nbsp;
                                            <span className="badge badge-dark">Watchers:{item.watchers}</span>&nbsp;
                                            <span className="badge badge-danger">Issues:{item.open_issues}</span>
                                        </div>    
                                    </div>
                                </div>                            
                            </div>    
                        </div>
                    </div>    
                );
            });            
        }
    }
    render(){
        return(
            <div>
                <div className="jumbotron"  style={{'backgroundColor':'#004D40','color':'white'}}>
                    <h3>Famous Repositories</h3>
                </div>
                <Link className="btn btn-link" to="/">Back</Link>
                <br/>
                <br/>
                <div className="input-group col-sm-12">
                    <input type="text" className="form-control" placeholder="search" onChange={(event)=>{this.onChange(event)}}/>
                </div>
                <br/>
                <br/>    
                <div>
                    <button className="btn btn-primary" onClick={()=>{this.onNext()}}>Next</button>&nbsp;&nbsp;
                    <span className="badge badge-pill badge-dark">{this.state.page}</span>&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={()=>{this.onPrev()}}>Previous</button>                              
                </div>
                <br/>
                <div className="container">
                {this.renderRepo()}
                </div>   

            </div>    
        );
    }
}

function mapDispatchToProps(state){
    return{
            RepoLang:state.RepoLanguage,
            getLang:state.getLang,
            searchTerm:state.searchTerm
        }
}

export default connect(mapDispatchToProps,actions)(ReposLanguage);

