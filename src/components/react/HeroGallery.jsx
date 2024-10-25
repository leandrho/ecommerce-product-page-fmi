import { useState } from "react";
import '/src/styles/styles.css';
import { FloatGallery } from "./FloatGallery";
const images = ['./images/image-product-1.jpg','./images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg'];

export const HeroGallery = () => {
    const [curImg, setCurImg] = useState(0);
    const [isFloatOpen, setFloatOpen] = useState(false);
    const nextImage = ()=>{
        if(curImg < images.length -1)
            setCurImg(curImg+1);
    }
    const prevImage = ()=>{
        if(curImg > 0)
            setCurImg(curImg-1);
    }
    const setCurrentImage = (idx)=>{
        setCurImg(idx);
    }
    
    const openFloatGallery = ()=>{
        setFloatOpen(true);
    }
    return (
        <>
            <div className="flex flex-col gap-8 max-w-[450px] w-full">
                <div className="h-[300px] relative md:rounded-xl lg:h-auto">
                    <button className="w-full h-full"
                            onClick={()=>openFloatGallery()}
                            aria-label="Picture Button"
                    >
                        <img src={images[curImg]} alt="" className="w-full h-full object-cover md:rounded-xl"/>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white flex justify-center items-center
                                absolute top-[50%] left-4 translate-y-[-50%]  hover:text-orangeCustom
                                md:hidden"
                            onClick={()=>{prevImage()}}
                            aria-label="Hero Gallery Previous Button"
                            >
                        <svg className="scale-75" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="4" fill="none" fillRule="evenodd"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white flex justify-center items-center
                                absolute top-[50%] right-4 translate-y-[-50%] hover:text-orangeCustom
                                md:hidden"
                            onClick={()=>{nextImage()}}
                            aria-label="Hero Gallery Next Button"
                            >
                            <svg className="scale-75" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="4" fill="none" fillRule="evenodd"/></svg>
                    </button>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex justify-between gap-6">
                        {
                            images.map((img, index)=>{
                                return <li key={index} className="gallery-item">
                                    <button className={curImg === index? "rounded-xl active":"rounded-xl cursor-pointer hover:opacity-70"}
                                            onClick={()=>{setCurrentImage(index)}}
                                            aria-label="Hero Gallery Open Button"
                                    > 
                                        <img src={img} alt="" className="rounded-xl w-full object-cover"/>
                                    </button>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="hidden lg:block fixed">
                <FloatGallery isOpen={isFloatOpen} setOpen={setFloatOpen}/>
            </div>
           
        </>
    )
}

