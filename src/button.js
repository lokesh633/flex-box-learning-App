import React, { useContext } from 'react';
import "./button.css";
import { AppContext } from './context';

const Button = () => {

    const {setFlexDirection,setJustifyContent,setAlignItems} = useContext(AppContext)

    const flexDirectionData = ["column", "column-reverse", "row", "row-reverse"]

    const justifyContentData = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]

    const alignItemsData = ["flex-start", "flex-end", "center"]

    const handleInput = ({target:{name,value}})=>{
        if(name==="flex-direction"){
            setFlexDirection(value)
        }
        if(name==="justify-content"){
            setJustifyContent(value)
        }
        if(name==="align-item"){
            setAlignItems(value)
        }
    }

    return (
        <div className='button-container'>
            <div className='value-title' >
                <h3 className='key'>Display:flex</h3>
            </div>
            <div className='container'>


                <div className='value-container'>
                    <h3 className='key'>Flex-direction</h3>
                    <div className='value-data'>
                        {
                            flexDirectionData.map((item, index) => {
                                return <div className='map-value' key={index}>
                                    <span className='map-inp-span'>
                                       <input type='radio' name='flex-direction' value={item} onChange={handleInput} />
                                    </span>
                                    <span className='map-item-span'>
                                       <h5>{item}</h5>
                                    </span>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className='value-container'>
                    <h3 className='key'>Justify-content</h3>
                    <div className='value-data'>
                        {
                            justifyContentData.map((item, index) => {
                                return <div className='map-value'  key={index}>
                                    <span className='map-inp-span'>
                                    <input type='radio' name='justify-content' value={item} onChange={handleInput} />
                                    </span>
                                    <span className='map-item-span'>
                                    <h5>{item}</h5>
                                    </span>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className='value-container'>
                    <h3 className='key'>Align-items</h3>
                    <div className='value-data'>
                        {
                            alignItemsData.map((item, index) => {
                                return <div className='map-value'  key={index}>
                                    <span className='map-inp-span'>
                                    <input type='radio' name='align-item' value={item} onChange={handleInput} />
                                    </span>
                                    <span className='map-item-span'>
                                    <h5>{item}</h5>
                                    </span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Button