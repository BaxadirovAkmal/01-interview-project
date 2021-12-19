import React from 'react';

const BlogPost = props => {
  return (
    <div className="blog-post-wrapper">
      <div className="blog-post-section">
        <div className="post-title">BLOG POST</div>
        <div className="blog-post-title">Our Latest Blog</div>
        <div className="blog-post-text">We ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor
          incididunt.
        </div>
      </div>
      <div className="container">
        <div className="row row-card">
          <div className="col col-card">
            <div className="card-box">
              <div className="card">
                <div className="card-header">
                  <img src="b1-.jpg" alt="devise"/>
                  <div className="bg-overlay"/>
                </div>
                <div className="card-body">
                  <div className="icon-box"><span><i className="icon-date-add"/></span> Dec 12 2020</div>
                  <div className="body-text">Will severely limit <br/> decarboni sation potential</div>
                </div>
                <div className="card-btn">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-card">
            <div className="card-box">
              <div className="card">
                <div className="card-header">
                  <img src="b2-.jpg" alt="devise"/>
                  <div className="bg-overlay"/>
                </div>
                <div className="card-body">
                  <div className="icon-box"><span><i className="icon-date-add"/></span> Dec 12 2020</div>
                  <div className="body-text">Will severely limit <br/> decarboni sation potential</div>
                </div>
                <div className="card-btn">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-card">
            <div className="card-box">
              <div className="card">
                <div className="card-header">
                  <img src="b3-.jpg" alt="devise"/>
                  <div className="bg-overlay"/>
                </div>
                <div className="card-body">
                  <div className="icon-box"><span><i className="icon-date-add"/></span> Dec 12 2020</div>
                  <div className="body-text">Will severely limit <br/> decarboni sation potential</div>
                </div>
                <div className="card-btn">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;