import React, { Component } from 'react'
import axios from 'axios'
import ReactHtmlParser from "react-html-parser"
import BlogFeaturedImage from "../blog/blog-featured-image"
import BlogForm from "../blog/blog-form"

export default class BlogDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
      editMode: false
    }

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this)
    this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this)
  }

  handleUpdateFormSubmission(blog) {
    this.setState({
      blogItem: blog,
      editMode: false
    })
  }

  handleFeaturedImageDelete() {
    this.setState({
      blogItem: {
        featured_image_url: ""
      }
    })
  }

  handleEditClick() {
    this.setState({
      editMode: true
    })
  }

  getBlogItem() {
    axios.get(`https://michaelcortez.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`).then(response => {
      this.setState({
        blogItem: response.data.portfolio_blog
      })
    }).catch(error => {
      console.log("error in getBlogItem", error)
    })
  }

  componentDidMount() {
    this.getBlogItem()
  }

  render() {
    const { content, title, blog_status, featured_image_url } = this.state.blogItem

    const contentManager = () => {
      if (this.state.editMode) {
        return <BlogForm
          editMode={this.state.editMode}
          blog={this.state.blogItem}
          handleFeaturedImageDelete={this.handleFeaturedImageDelete}
          handleUpdateFormSubmission={this.handleUpdateFormSubmission}
        />
      } else {
        return (
          <div className="content-container">
            <h1 onClick={this.handleEditClick}>{title}</h1>

            <BlogFeaturedImage img={featured_image_url}/>

            <div className="content">
              {ReactHtmlParser(content)}
            </div>
          </div>
        )
      }
    }

    return (
      <div className="blog-container">
        {contentManager()}
      </div>
    )
  }
}