import React from "react";
import { Card } from "react-bootstrap";
import "../css-files/NewsCard.css";
export const NewsCard = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Card style={{ width: "800px" }} className="card_">
        <Card.Img
          variant="top"
          src={
            data.urlToImage
              ? data.urlToImage
              : "https://my-goodlife.com/assets/images/products/not-available.png"
          }
          className="card_img"
        />
        <Card.Body className="card_body">
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            <p className="card_top_p">
              <b>Short</b> by {data.author}
            </p>
            <p className="card_discription">{data.description}</p>
            <p className="card_bottom">
              read more at:
              <a href={data.url} target="_blank">
                <b>{data.source.name}</b>
              </a>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
