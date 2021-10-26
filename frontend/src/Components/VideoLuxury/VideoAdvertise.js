import React from 'react';
import './VideoAdvertise.css';

export default function VideoAdvertise() {
    return (
<div className="video-advertise">
    <video controls poster="/images/Logo.png">
        <source src="/videos/video1.mp4" type="video/mp4" />
    </video>
</div>
    )
}
