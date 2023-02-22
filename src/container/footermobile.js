import El from "../library/EG"
const footer = () => {
    return(
        El({
            element:"div",
            className:"w-full h-16 bg-white fixed bottom-0 left-0 lg:hidden shadow-xl border-gray-100 border-t-2",
            child:El({
                element:"ul",
                className:"flex gap-5 text-lg  justify-center items-center w-full h-full",
                child:[
                    // ************li 1 *****
                    El({
                        element:"li",
                        className: "bg-white flex flex-col text-md  justify-center items-center",
                        child:[
                            El({
                                element:"img",
                                className:"w-9 absolute bottom-8",
                                src:"../img/download.svg"
                            }),
                            El({
                                element:"span",
                                className:"mt-7",
                                child:"آگهی"
                            }),
                        ]

                    }),
                    // ************li 2 *****
                    El({
                        element:"li",
                        className: "bg-white flex flex-col text-md  justify-center items-center",
                        child:[
                            El({ element:"ion-icon",
                            className:"ml-3 align-middle text-center text-2xl",
                            name:"add-circle-outline"
                            }),
                            El({
                                element:"span",
                                className:"",
                                child:"دسته‌ها"
                            }),
                        ]

                    }),
                    // ************li 3 *****
                    El({
                        element:"li",
                        className: "bg-white flex flex-col text-md gap-1  justify-center items-center",
                        child:[
                            El({ element:"ion-icon",
                            className:"ml-3 align-middle text-center  text-2xl",
                            name:"add-circle-outline"
                            }),
                            El({
                                element:"span",
                                className:"",
                                child:"ثبت‌آگهی"
                            }),
                        ]

                    }),
                    // *********************li 4 *************
                    El({
                        element:"li",
                        className: "bg-white flex flex-col text-md  justify-center items-center",
                        child:[
                            El({ element:"ion-icon",
                            className:"ml-3 align-middle text-center  text-2xl",
                            name:"chatbubble-outline"
                            }),
                            El({
                                element:"span",
                                className:"",
                                child:"چت"
                            }),
                        ]

                    }),
                    // ******************li 5 ************
                    El({
                        element:"li",
                        className: "bg-white flex flex-col text-md  justify-center items-center",
                        child:[
                            El({ element:"ion-icon",
                            className:"ml-3 align-middle text-center  text-2xl",
                            name:"person-outline"
                            }),
                            El({
                                element:"span",
                                className:"",
                                child:"دیوار‌من"
                            }),
                        ]

                    }),
                ]
            })
        })

    )
}
export default footer