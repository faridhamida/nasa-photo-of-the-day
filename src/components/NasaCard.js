import React from "react";
import styled from "styled-components";
import {Col, Card, CardText, CardTitle, CardImg, CardBody} from "reactstrap";

const NasaCard2 = styled.div`
   background: none;
   color: darkblack;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const BackColors = styled.div`
background: yellow;
`;

const NasaCard = props => {

    return (

        <NasaCard2>
            <Col xs="12" s= "6" md="4">
                
                <Card>    
           <CardImg src= {props.hdurl} alt="space"/>
           <CardBody>
            <BackColors>
           <CardTitle>{props.title}</CardTitle>
            <CardTitle>{props.date}</CardTitle> 
            <CardText>{props.explanation}</CardText>
                        </BackColors>
                    </CardBody>
                </Card>
               
           </Col>
        </NasaCard2>
    )
}

export default NasaCard;