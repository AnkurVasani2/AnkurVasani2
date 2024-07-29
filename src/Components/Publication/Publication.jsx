import React from 'react';
import '../Publication/Publication.css';

const publications = [
  {
    title: 'New Frontier in Machine Learning: Revolutionizing Home Food Management using IoT and Object Detection',
    conference: "IEEE's 2024 12th International Conference on Information and Communication Networks (ICICN) by MULTICON-W",
    date: 'Feb 1,2024',
    link: 'https://drive.google.com/file/d/1fYp-mWOIJWMUchbqdbGOo6OKluy6c2HD/view?usp=sharing',
    authors: ['Ankur Vasani', 'Rashmi Kamdar'],
    abstract: "The proposed paper introduces an innovative Intelligent Refrigerator System that leverages the power of Object Detection and Machine Learning to revolutionize home food management. The system's Object Detection capabilities enable the refrigerator to scan its contents, providing an accurate inventory of stored items. Utilizing machine learning algorithms, the system then suggests recipes based on the scanned items. Furthermore, it predicts the shelf life of products and alerts the user through a mobile app. Additionally, the system automates the creation of frequently used item lists, facilitating seamless online shopping. This integrated approach offers a smart, efficient, and user-friendly solution for organizing, planning, and optimizing household food management, promising to enhance convenience and reduce wastage.",
    keywords: ['Object Detection', 'Machine Learning'],
    type: 'Conference Paper',
    status: 'Published',
    institution: 'Thakur College of Engineering, Mumbai'
  },
  {
    title: 'Revolutionizing Traditional Supermarkets: A Comprehensive Solution for Enhancing Efficiency, Security and Customer Satisfaction',
    conference: "ACM's 2024 Sixteenth International Conference on Contemporary Computing (IC3)",
    date: 'July 1,2024',
    doi: '10.1145/3675888.3676096',
    link: "https://drive.google.com/file/d/1usWdm6UjTfG6RS4hcBq9zoaES03T__cL/view",
    authors: ['Ankur Vasani', 'Om Tanna', 'Krishna Thakkar', 'Malav Gotecha'],
    abstract: "This research proposes an Artificially Intelligent enabled Smart Supermarket System for enhanced efficiency, security and reduces man power as compared to traditional Supermarkets. In order to ensure a perfect omnichannel shopping experience the system uniquely includes an Artificially Intelligent model. Customers can scan items on the go with the app in their smartphones, select product variants as required, add the product to their virtual cart and pay online for the total cart value. With the help of YOLOv5 computer vision algorithm, eliminating long checkout queues and manpower the system proves to be revolutionizing the traditional supermarket procedures. Moreover, the system also incorporates the indoor navigation assistance on customer’s app to facilitate easy access and navigation to preferred items. This futuristic solution not only provides valuable insights for business development but also is proven to be more efficient and helpful for customers saving their time and companies resources.",
    keywords: ['Omnichannel Shopping', 'Computer Vision', 'YOLOv5', 'Artificial Intelligence'],
    type: 'Conference Paper',
    status: 'Published',
    institution: 'Jaypee Institute of Information Technology Noida, Louisiana Tech University, USA and University of Florida, USA .'
  }
  // Add more publications here
];

const Publication = () => {
  return (
    <div className="publication">
      <div className="pub-head head">
        <span className="publication-subtitle">Explore my recent</span>
        <h1 className="publication-title">Publications</h1>
      </div>
      <div className="publication-container">
        <div className="publication-list">
          {publications.map((pub, index) => (
            <div className="publication-item" key={index}>
              <h2 className="publication-item-title">{pub.title}</h2>
              <p className="publication-item-detail"><strong>Conference/Journal:</strong> {pub.conference}</p>
              <p className="publication-item-detail"><strong>Date:</strong> {pub.date}</p>
              {pub.authors && <p className="publication-item-detail"><strong>Authors:</strong> {pub.authors.join(', ')}</p>}
              {pub.abstract && <p className="publication-item-detail"><strong>Abstract:</strong> {pub.abstract}</p>}
              {pub.keywords && (
                  <p className="publication-item-detail"><strong>Keywords:</strong> 
                  {pub.keywords.map((keyword, i) => (
                      <span key={i} className="publication-item-keyword">{keyword}</span>
                    ))}
                </p>
              )}
              {pub.doi && <p className="publication-item-detail"><strong>DOI:</strong> <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="publication-item-link">{pub.doi}</a></p>}
              {pub.type && <p className="publication-item-detail"><strong>Type:</strong> {pub.type}</p>}
              {pub.status && <p className="publication-item-detail"><strong>Status:</strong> {pub.status}</p>}
              {pub.institution && <p className="publication-item-detail"><strong>Institution:</strong> {pub.institution}</p>}
              <button className="pub-view">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-item-link">Read More</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publication;
