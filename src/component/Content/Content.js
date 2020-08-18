import React from "react";
import "./Content.css";
import Error from "../Error/Error";

const Content = (props) => {
  const { photos, error, notification } = props;
  console.log('there are 2 photos', photos.length)

  return !error ? (
      <div className="content">
          {photos.length > 0 && photos.map((pic, i ) => {
              return(
                      <div key={i} className="contentWrap">
                            <div className="">
                                <img
                                    src={pic.url}
                                    alt="Photo"
                                    style={{ width: "310px", height: "180px" }}
                                />
                            </div>
                            <div style={{ display: 'flex', width: "310px", height: "70px"}}>
                                <img
                                    src={pic.thumbnailUrl}
                                    alt={pic.title}
                                    style={{
                                        margin: "17px",
                                        borderRadius: "50%",
                                        width: "35px",
                                        height: "35px",
                                    }}
                                />
                                <div style={{ textAlign: 'center', fontSize: '1em', lineHeight: "1" }}>Web development in 2020- Watch out!</div>
                            </div>
                            
                        </div>                        
              )
          }
          )}
      </div>
  ) : (
      <div>
        <Error />
      </div>
  );
};
export default Content;
