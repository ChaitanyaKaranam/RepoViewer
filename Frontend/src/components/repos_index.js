import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ReposIndex extends Component{
    
    componentDidMount(){
        {this.props.fetchExplore()}
    }

    getRepos(item){
        {this.props.fetchRepos(item,1)}
        {this.props.fetchLanguage(item)}
    }

    renderExplore(){     

        if(this.props.explore.data){
            return this.props.explore.data.map(items=>{
                return items.map(item=>{
                    return(
                        <div className="card col-md-3">
                            <img className="card-img-top" src={item.img} />
                                <div className="card-body">
                                    <center><h3 className="card-title">{item.name}</h3></center>
                                    <center><Link onClick={()=>{this.getRepos(item)}} className="btn btn-primary col-sm-12" to="/Repos">view</Link></center>
                                </div>
                        </div>    
                    );
                });
            });
        }        
    }
    
    render(){

        if(!this.props.explore.data){
            return <div>Loading...</div>
        }

        return(
            <div>
                <div className="jumbotron" style={{'backgroundColor':'#004D40','color':'white'}}>
                    <h2>Choose your favourite Framework</h2>
                </div>    
                <br/>
                <div className="container">
                    <div className="row">
                        {this.renderExplore()}
                    </div>
                </div>    
                       
            </div>    
        );
    }
}

function mapStateToProps(state){
    return {explore:state.RepoIndex};
}

export default connect(mapStateToProps,actions)(ReposIndex);