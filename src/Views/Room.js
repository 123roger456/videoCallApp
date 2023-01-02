import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    const {roomId} = useParams()
    const meeting = (ele) => {
        const appId = process.env.REACT_APP_ID
        const serverSecret = process.env.REACT_APP_SERVERSECRET
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId,  Math.floor(Math.random() * 10000) + "",  "RogerJack")

        const zegocl = ZegoUIKitPrebuilt.create(kitToken)
        zegocl.joinRoom({
            container: ele,
            sharedLinks : [
                {
                    name: "copy link",
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode : ZegoUIKitPrebuilt.OneONoneCall,

            },
            showScreenSharingButton: true,
        })
    }
  return (
    <div>
        <div ref={meeting} />
    </div>
  )
}

export default Room