import El from "../library/EG"

const aside = () => {
    return(
        El({
            element:"aside",
            className:" w-1/6 px-14 py-8 hidden lg:block text-gray-500 fixed right-28 top-0 mt-20",
            child:[
                // ************************ul*****************
                El({
                    element:"ul",
                    className:" leading-3",
                    child:[
                        // ----------- lable---------child 1
                        El({
                        element:"lable",
                        className:"",
                        child:"دسته‌ها"
                        }),
                        // ----------------end lable--------------------
                        // ----------- li cat---------child 2
                        El({
                            element:"li",
                            className:" border-b-2 border-solid border-gray-100 py-5",
                            child:[
                                // +++++++++++li>ul++++++++++
                                El({
                                    element:"ul",
                                    className:"leading-10",
                                    child:[
                                        // ...............li>ul>li 1...........
                                        El({
                                            element:"li",
                                            className:" hover:text-black hover:font-bold cursor-pointer duration-700",
                                            child:[                       
                                                El({
                                                element:"ion-icon",
                                                className:"ml-3",
                                                name:"home-outline"
                                                }),
                                                El({
                                                    element:"span",
                                                    className:"",
                                                    child:"املاک"
                                                    })
                                            
                                            ]
                                            }),
                                        // ...............end li>ul>li 1...........
                                        // ............li>ul>li 2..............
                                        El({
                                            element:"li",
                                            className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                            child:[                       
                                                El({
                                                element:"ion-icon",
                                                className:"ml-3",
                                                name:"car-outline"
                                                }),
                                                El({
                                                    element:"span",
                                                    className:"",
                                                    child:"وسایل نقلیه"
                                                    })
                                            
                                            ]
                                            }),

                                            // ...............end li>ul>li 2...........
                                            // ............li>ul>li 3..............
                                            El({
                                                element:"li",
                                                className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                                child:[                       
                                                    El({
                                                    element:"ion-icon",
                                                    className:"ml-3",
                                                    name:"restaurant-outline"
                                                    }),
                                                    El({
                                                        element:"span",
                                                        className:"",
                                                        child:"خانه و آشپزخانه"
                                                        })
                                                
                                                ]
                                                }),
                                            // ...............end li>ul>li 3...........
                                            // ............li>ul>li 4..............
                                            El({
                                                element:"li",
                                                className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                                child:[                       
                                                    El({
                                                    element:"ion-icon",
                                                    className:"ml-3",
                                                    name:"cog-outline"
                                                    }),
                                                    El({
                                                        element:"span",
                                                        className:"",
                                                        child:" خدمات "
                                                        })
                                                
                                                ]
                                                }),
                                            // ...............end li>ul>li 4...........
                                             // ............li>ul>li 5..............
                                             El({
                                                element:"li",
                                                className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                                child:[                       
                                                    El({
                                                    element:"ion-icon",
                                                    className:"ml-3",
                                                    name:"watch-outline"
                                                    }),
                                                    El({
                                                        element:"span",
                                                        className:"",
                                                        child:" وسایل شخصی "
                                                        })
                                                
                                                ]
                                                }),
                                             // ...............end li>ul>li 5...........
                                              // ............li>ul>li 6..............
                                              El({
                                                element:"li",
                                                className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                                child:[                       
                                                    El({
                                                    element:"ion-icon",
                                                    className:"ml-3",
                                                    name:"dice-outline"
                                                    }),
                                                    El({
                                                        element:"span",
                                                        className:"",
                                                        child:"  سرگرمی و بازی "
                                                        })
                                                
                                                ]
                                                }),
                                             // ...............end li>ul>li 6...........
                                             // ............li>ul>li 7..............
                                              El({
                                                element:"li",
                                                className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                                child:[                       
                                                    El({
                                                    element:"ion-icon",
                                                    className:"ml-3",
                                                    name:"people-outline"
                                                    }),
                                                    El({
                                                        element:"span",
                                                        className:"",
                                                        child:"اجتماعی"
                                                        })
                                                
                                                ]
                                                }),
                                             // ...............end li>ul>li 7...........
                                             // ............li>ul>li 8..............
                                             El({
                                                element:"li",
                                                className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                                child:[                       
                                                    El({
                                                    element:"ion-icon",
                                                    className:"ml-3",
                                                    name:"cut-outline"
                                                    }),
                                                    El({
                                                        element:"span",
                                                        className:"",
                                                        child:"تجهیزات و صنعت"
                                                        })
                                                
                                                ]
                                                }),
                                             // ...............end li>ul>li 8...........
                                      // ............li>ul>li 9..............
                                      El({
                                        element:"li",
                                        className:"hover:text-black hover:font-bold cursor-pointer duration-700",
                                        child:[                       
                                            El({
                                            element:"ion-icon",
                                            className:"ml-3",
                                            name:"briefcase-outline"
                                            }),
                                            El({
                                                element:"span",
                                                className:"",
                                                child:"استخدام و کاریابی"
                                                })
                                        
                                        ]
                                        }),
                                     // ...............end li>ul>li 9...........                                           
                                    ]
                                    }),
                                // +++++++++++ end li>ul++++++++++
                            ]
                            }),
                        // ----------- li cat---------------
// ---------------------------------li 2 ----------------------

                        El({
                            element:"li",
                            className:"border-b-2 border-solid border-gray-100 py-5 cursor-pointer text-black",
                            child:[
                               El({ element:"ion-icon",
                                className:"ml-3 align-middle",
                                name:"chevron-down-outline"
                                }),
                                El({
                                    element:"span",
                                    className:"",
                                    child:"محل"
                                    })
                            ]
                            }),
                            // ---------------------------------li 3 ----------------------
                            El({
                                element:"div", 
                                className:"border-b-2 border-solid border-gray-100 py-5 cursor-pointer  text-black",
                                child:[
                                   El({ element:"ion-icon",
                                    className:"ml-3 align-middle",
                                    name:"chevron-down-outline"
                                    }),
                                    El({
                                        element:"span",
                                        className:"",
                                        child:" قیمت"
                                        })
                                ]
                                }),

                                // -------------------------------li 3 ------------------------
                                El({
                                    element:"div",
                                    className:"border-b-2 border-solid border-gray-100 py-5 cursor-pointer text-black",
                                    child:[
                                       El({ element:"ion-icon",
                                        className:"ml-3 align-middle",
                                        name:"chevron-down-outline"
                                        }),
                                        El({
                                            element:"span",
                                            className:"",
                                            child:"وضعیت آگهی"
                                            })
                                    ]
                                    }),
        
                    ]
                }),

                       
                // ********************************ul***************











                // ********************div = درباره دیوار .... *************
                El({
                    element:"div",
                    className:"flex gap-5 text-sm mt-14",
                    child:[
                       El({ 
                        element:"span",
                        className:"align-middle",
                        child:"درباره‌دیوار"
                        }),
                        El({
                            element:"span",
                            className:"",
                            child:"دریافت‌برنامه"
                            }), 
                            El({ element:"span",
                            className:"ml-3 align-middle",
                            child:"بلاگ‌دیوار"
                            }),
                    ]
                    }),
                // *********************************پایان دیو اول بعد از ul*************************



                 // ********************div =  کسب و کار و پشتیباینی .... *************

                 El({
                    element:"div",
                    className:"flex gap-5 text-sm mt-14",
                    child:[
                       El({ element:"span",
                        className:"",
                        child:"کسب‌و‌کارها"
                        }),
                        El({
                            element:"span",
                            className:"",
                            child:"پشتیبانی‌و‌قوانین"
                            }), 
                    ]
                    }),
                // *********************************پایان دیو دوم   *************************



                // ********************div =  آیکن ها .... *************
                El({
                    element:"div",
                    className:" flex gap-5 text-lg mt-14",
                    child:[
                       El({ element:"ion-icon",
                        className:"ml-3 align-middle",
                        name:"logo-twitter"
                        }),
                        El({ element:"ion-icon",
                        className:"ml-3 align-middle",
                        name:"logo-linkedin"
                        }),
                        El({ element:"ion-icon",
                        className:"ml-3 align-middle",
                        name:"logo-instagram"
                        }),
                        El({ element:"ion-icon",
                        className:"ml-3 align-middle",
                        name:"logo-youtube"
                        }),
      
                    ]
                    }),

                // *********************************پایان آیکن ها   *************************

            ]
        })
    )
}

export default aside