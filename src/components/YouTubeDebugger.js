import React, { Component } from "react";

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }


    handleBitClick = () => {
        this.setState((previousState) => {
            return {
                settings: {...previousState.settings, bitrate: 12}
            }
        })
    }

    handleResClick = () => {
        this.setState((previousState) => {
            return {
                settings: {...previousState.settings, 
                    video: {...previousState.settings.video, resolution: '720p'}
                }
            }
        })
    }

    render() {
        return (
         <div>
             <button className='bitrate' onClick={this.handleBitClick}>{this.state.settings.bitrate}</button>
             <button className='resolution' onClick={this.handleResClick}> {this.state.settings.video.resolution}</button>
         </div>
        )
    }
}
