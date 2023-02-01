import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast ,faMoneyCheckDollar,faShield,faHeadset } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const data = [
    {
      cover: <i><FontAwesomeIcon icon={faTruckFast} /></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i><FontAwesomeIcon icon={faMoneyCheckDollar} /></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i><FontAwesomeIcon icon={faShield} /></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover:  <i><FontAwesomeIcon icon={faHeadset} /></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='services'>
        <div className='services_container'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Services;
