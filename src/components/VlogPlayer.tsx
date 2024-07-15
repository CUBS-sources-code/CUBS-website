'use client'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useWindowListener } from '@/hooks/useWindowListener'

export function VlogPlayer(
    { vdoSrc, isPlaying }: { vdoSrc: string, isPlaying: boolean }) {
    
    const vdoRef = useRef<HTMLVideoElement>(null)
    
    useWindowListener('resize', (e) => console.log("hi")
        //alert('window width is ' + (e.target as Window).innerWidth)
    )

    useEffect(() => {
        // alert("width is " + vdoRef.current?.videoWidth)
    
        if (isPlaying) {
            // alert('Play VDO')
            vdoRef.current?.play()
        } else {
            // alert('Pause VDO')
            vdoRef.current?.pause()
        }
    }, [isPlaying])

    return (
        <video className='w-[40%]' src={vdoSrc} ref={vdoRef} muted loop controls />
    )
}