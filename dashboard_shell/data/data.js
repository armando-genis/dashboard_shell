import axios from "axios"
import React, { use } from "react"
import { useEffect, useRef, useState } from 'react'



export const datafetching = () => {

    const [posts, setPosts] = useState([0, 0]);


    useEffect(() => {
        axios.get('https://telemetriashell-default-rtdb.firebaseio.com/telemetry.json')
            .then(res => {
                setPosts(res.data)
                // console.log(res.data[0])

            })
            .catch(err => {
                console.log(err)
            })
    })

    return posts;
}

// const [isLoading, setIsLoading] = useState(true)
// const snapshot = useRef(null)
// const error = useRef(null)


// const getValue = async () => {

//     try {
//         const database = db
//         const rootReference = ref(database)
//         const dbGet = await get(child(rootReference, 'telemtry'))
//         const dbValue = dbGet.val()
//         snapshot.current = dbValue
//         console.log(dbValue)

//     } catch (error) {
//         error.current = getError.message
//     }
//     setIsLoading(false)
// }

// useEffect(() => {
//     getValue()
// })

// if (isLoading) {
//     return <p>Fetching data...</p>
// }
// const posts = snapshot.current
// const data = Object.values(posts)
// console.log({ posts, data })

// const [posts, setPosts] = useState([]);
// let data2;

// useEffect(() => {
//     axios.get('https://shell-app-telemetry-default-rtdb.firebaseio.com/telemtry.json')
//         .then(res => {
//             setPosts(res.data)
//             const posts_res = [];
//             for (let key in res.data) {
//                 posts_res.push({ ...res.data[key], id: key })
//             }
//             data2 = posts_res[0].current;

//         })
//         .catch(err => {
//             console.log(err)
//         })
// })
// console.log(posts[0]?.current)

{/* <div>
                {posts.map(post => (
                    <h1 className="text-white" key={post.id[0]}>{post.current} as</h1>
                ))}
            </div>  */}
