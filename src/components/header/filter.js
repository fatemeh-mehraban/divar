import button from "../../library/button";
import El from "../../library/EG";


const filter =()=>{
    return(El({
        element : "section",
        className:"w-full h-14 shadow-md flex gap-3 justify-center items-center text-gray-500 font-bold overflow-x-hidden lg:hidden fixed top-16 bg-white z-10",
        child:[
            button({
            child:[
                El({
                    element:"ion-icon",
                    className:"align-middle",
                    name:"options-outline"
                    }),

            El({
            element:"span" ,
            child:" فیلترها"    
            }),

        ]

        }),


        button({
            child:[
                El({
                    element:"ion-icon",
                    className:"align-middle",
                    name:"options-outline"
                    }),

            El({
            element:"span" ,
            child:" دسته‌ها"    
            }),

        ]

        }),



        button({
            child:[
                El({
                    element:"ion-icon",
                    className:"align-middle",
                    name:"options-outline"
                    }),

            El({
            element:"span" ,
            className:"w-max",
            child:" خودرو سواری"    
            }),

            

        ]
        }),

        button({
            child:[
                El({
                    element:"ion-icon",
                    className:"align-middle",
                    name:"options-outline"
                    }),

            El({
            element:"span" ,
            className:"w-max",
            child:" فروش ‌آپارتمان"    
            }),

            

        ]
        }),


        button({
            child:[
                El({
                    element:"ion-icon",
                    className:"align-middle",
                    name:"options-outline"
                    }),

            El({
            element:"span" ,
            className:"w-max",
            child:" اجاره‌آپارتمان"    
            }),

            

        ]
        }),


        button({
            child:[
                El({
                    element:"ion-icon",
                    className:"align-middle",
                    name:"options-outline"
                    }),

            El({
            element:"span" ,
            child:"  موبایل"    
            }),
        ]
        }),

        button({
            child:[
                El({
                    element:"ion-icon",
                    className:"align-middle",
                    name:"options-outline"
                    }),

            El({
            element:"span" ,
            className:"w-max",
            child:"صندلی و نیمکت"    
            }),
        ]
        }),
        

    ]
    }))
}

export default filter
