import React, { Component } from 'react';
import PostItem from './../PostItem';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page :1,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    LoadMore = () => {
        // alert("page" + this.state.page);
        fetch(`http://localhost:3000/posts?page=${this.state.page + 1}`)
            .then(res => res.json())
            .then(
                (result) => {
                    let tmp = this.state.items;
                    this.setState({
                        page: this.state.page + 1,
                        isLoaded: true,
                        items: [
                            ...tmp,
                            ...result.data
                        ]
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        fetch("http://localhost:3000/posts?page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                Error: {error.message}
                            </div>
                        </div>
                    </div>
                </div>
            )
                ;
        } else if (!isLoaded) {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                Loading...
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mx-auto">
                                {items.map((item) => {
                                    return <PostItem
                                    key={item._id}
                                    title={item.title}
                                    sub_title={item.preview}
                                    author={item.author}
                                    slug={item.slug}
                                    created_at={item.createdDate} />
                                })}
                                {/* Pager */}
                                <div className="clearfix">
                                    <a className="btn btn-primary float-right" style={{cursor:"pointer"}} onClick={this.LoadMore}>Xem thêm →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    }
}

export default Home;