import El from "../../library/EG";

const header =()=>{
    return (El({
        element:"header",
        className: "w-full shadow-md flex justify-center items-center text-gray-500 font-bold lg:px-36 lg:justify-between fixed z-20 bg-white lg:relative" ,
        child:[
            // ********************************ul 1 *******************
            El({
            element:"ul",
            className:"first-ul-header h-full bg-white-100 py-3  flex gap-5 items-center",
            child:[El({
                element:"li",
                className:"logo border-l-2 border-gray-200  h-7 hidden lg:block relative w-36 ",
                child:El({
                    element:"img",
                    className:" w-14 absolute -bottom-1/2  right-14 ",
                    src:"img/download.svg"
                }),
            }),
            El({
                element:"li",
                className:"location hidden lg:block flex items-center justify-center hover:text-black cursor-pointer duration-500",
                child:[ 
                     El({
                    element:"ion-icon",
                    className:"align-middle  max-[1368px]:hidden",
                    name:"location-outline"
                    }),
                    
                    El({
                    element:"a",
                    className:"mr-2",
                    child:"تهران"
                    })]
            
            }),

            El({
                element:"li",
                className:"Categories hidden lg:block flex items-center justify-center hover:text-black cursor-pointer duration-500",
                child:[                     
                    El({
                    element:"a",
                    className:"",
                    child:"دسته‌ها"
                    }),
                     El({
                    element:"ion-icon",
                    className:"align-middle mr-2  max-[1368px]:hidden",
                    name:"chevron-down-outline"
                    })
                    ]
            
            }),
            
            
            El({
                element:"li",
                className:"Categories bg-gray-100 h-10 flex items-center  w-full rounded-md lg:w-96 ",
                child:[  
                    El({
                        element:"ion-icon",
                        className:"align-middle mr-2 text-2xl ",
                        name:"search-outline"
                        }),

                    El({
                    element:"input",
                    className:"bg-gray-100 px-3 h-full w-full outline-none rounded-md",
                    placeholder: "جستجو در همه آگهی‌ها"
                    }),


                    El({
                        element:"span",
                        className:"border-r-2 border-gray-200 flex  items-center px-2 lg:hidden",
                        child:[El({
                            element:"ion-icon",
                            className:"align-middle mr-2",
                            name:"location-outline"
                        }),

                        El({
                            element:"span",
                            className:"align-middle mr-2 ",
                            child:"تهران"
                        }),
                    
                    ]
                        
                        }),
                    ]
            
            })

        
        ]
        }),
 // ********************************ul 2 *******************
El({
    element:"ul",
    className:" gap-5 items-center  hidden lg:block lg:flex",
    child:[
        El({
            element:"li",
            className:"person flex items-center hover:text-black cursor-pointer duration-500",
            child:[ 
                 El({
                element:"ion-icon",
                className:"align-middle  max-[1368px]:hidden",
                name:"person-outline"
                }),
                
                El({
                element:"a",
                className:"mr-2 max-[1368px]:w-max",
                child:"دیوار من"
                })]
        
        }),

        El({
            element:"li",
            className:"chat flex items-center hover:text-black cursor-pointer duration-500",
            child:[ 
                 El({
                element:"ion-icon",
                className:"align-middle  max-[1368px]:hidden",
                name:"chatbubble-outline"
                }),
                
                El({
                element:"a",
                className:"mr-2",
                child:"چت"
                })]
        
        }),

        El({
            element:"li",
            className:"hover:text-black cursor-pointer duration-500",
            child:
                El({
                element:"a",
                className:"mr-2",
                child:"پشتیبانی"
                })
        
        }),
        El({
            element:"li",
            className:"",
            child:
                El({
                element:"button",
                className:"px-5 py-2 bg-red-700 text-white rounded-md max-[1368px]:w-max",
                child:"ثبت آگهی"
                })
        
        })
    ]
})



    ]
    })

    )
 }
 export default header;
 