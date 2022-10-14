import React from "react";
import '../../stylesheets/Item.css';
import WaterIcon from '@mui/icons-material/Water';
import HomeIcon from '@mui/icons-material/Home';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({id, title, pictureUrl, pricing, caring, loading}) => {
    const waterIconsTotal = [1,2,3];
    const typeValues = {
        exterior: "ext",
        interior: "int"
    };
    const priceWithDiscount = pricing.netAmount - ((pricing.netAmount * pricing.discountPercentage) / 100);

    return(
        <Link to={`/producto/${id}`}>
            <div className="item">
                <div className="item-img-container">
                    { 
                        loading ? (<Skeleton variant="circular" sx={{ bgcolor: 'grey.400' }} width={200} height={200} animation="wave" />) : (<img src={pictureUrl} alt={title} />)
                    }
                    <div className="item-details">
                        <div className="item-watering-details">
                        {
                            loading ? (<Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem" }} animation="wave" />) : (<span className="item-title">Agua</span>)
                        }
                        {
                            loading ? (
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: ".9rem" }} animation="wave" />
                                    <Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: ".9rem" }} animation="wave" />
                                    <Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: ".9rem" }} animation="wave" />
                                </div>
                            ) : (<span className="item-watering"> 
                            {waterIconsTotal.map(element => {
                                if(caring.watering > 0){
                                    caring.watering--;
                                    return <WaterIcon fontSize="small" style={{color: "var(--header-color-nav-buttons)"}} key={element} />;
                                }
                                return <WaterIcon fontSize="small" style={{color: "grey"}} key={element} />;
                            })}
                        </span>)
                        }
                        </div>
                        <div className="item-type-details">
                            {
                                loading ? (<Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem" }} animation="wave" />) : (<span className="item-title">Tipo</span>)
                            }
                            {
                                loading ? (
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                                        <Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: "1.2rem" }} animation="wave" />
                                        <Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: "1.2rem", marginLeft: "1rem" }} animation="wave" />
                                    </div>
                                ):(
                                    <span className="item-type">
                                        {caring.type === typeValues.interior ? (
                                            <>
                                                <HomeIcon className="item-type-icon" style={{color: "brown"}} />
                                                <WbSunnyIcon className="item-type-icon" style={{color: "grey"}} />
                                            </>
                                        ) : (
                                            <>
                                                <HomeIcon className="item-type-icon" style={{color: "grey"}} />
                                                <WbSunnyIcon className="item-type-icon" style={{color: "yellow"}} />
                                            </>
                                        )}
                                    </span>
                                )
                            } 
                        </div>
                        {
                            pricing.discountPercentage > 0 && (loading ? (<Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: "100%" }} animation="wave" />) : (<span className="item-price-wo-discount"><s>$ {pricing.netAmount}</s></span>))
                        }
                        {
                            loading ? (<Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: "100%" }} animation="wave" />) : (
                                <span className="item-price">$ {pricing.discountPercentage > 0 ? Math.round(priceWithDiscount) : pricing.netAmount}</span>
                            )
                        }
                    </div>
                </div>
                <div className="item-description">
                    {
                        loading ? (<Skeleton variant="text" sx={{ bgcolor: 'grey.400', fontSize: "1rem", width: "5rem" }} animation="wave" />) : (<h3>{title}</h3>)
                    }             
                </div>
            </div>
        </Link>
    );
};

export default Item;