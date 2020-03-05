import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Blog extends Component {
  constructor() {
    super()

    this.state = {
      blogItems: []
    }

    this.getBlogItems = this.getBlogItems.bind(this)
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

  componentDidMount() {
    this.getBlogItems()
  }

  render() {
    return (
      <div>
        <h2>Blog</h2>
  
        <div>
          <Link to="/about-me">
            Read more about myself
          </Link>
        </div>
      </div>
    )
  }
}