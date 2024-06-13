import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const imgStyle = {
    width: '100%',  
    height: '250px',  
    objectFit: 'cover',  
    borderRadius: '5px', 
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} style={imgStyle} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
