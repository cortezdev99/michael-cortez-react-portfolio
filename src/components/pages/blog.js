import React, { Component } from 'react'
import axios from 'axios'
import BlogItem from "../blog/blog-item"

export default class Blog extends Component {
  constructor() {
    super()

    this.state = {
      blogItems: []
    }

    this.getBlogItems = this.getBlogItems.bind(this)
    this.activateInfiniteScroll()
  }

  activateInfiniteScroll() {
    window.onscroll = () => {
      // console.log("window.innerHeight", window.innerHeight)
      // console.log("document.documentElement.scrollTop", document.documentElement.scrollTop)
      // console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight)

      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        console.log("get more posts")
      }
    }
  }

  getBlogItems() {
    axios.get("https://michaelcortez.devcamp.space/portfolio/portfolio_blogs", { withCredentials: true }).then(response => {
      this.setState({
        blogItems: response.data.portfolio_blogs
      })
    }).catch(error => {
      console.log("getBlogItems error", error)
    })
  }

  // React v17 and above calls this unsafe
  componentWillMount() {
    this.getBlogItems()
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />
    })

    return (
      <div className="blog-container">
        <div className="content-container">
          {blogRecords}
        </div>
      </div>
    )
  }
}