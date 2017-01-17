import React from 'react';
import Progress from './components/progress';

let Root = React.createClass({
	componentDidMount() {
		$("#player").jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E8%8E%AB%E6%96%87%E8%94%9A-%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3"
				}).jPlayer('play');
			},
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
			this.setState({
				progress: Math.round(e.jPlayer.status.currentTime)
			});
		});
	},
	componentWillUnmout() {
		$("#player").unbind($.jPlayer.event.timeupdate);
	},
	getInitialState() {
		return {		
			progress: 0
		}
	},
	counterHandler() {
		this.setState({
			count: this.state.count + 1
		});
	},
    render() {
        return (
            <div>
                <h1>Welcome to the React lesson~</h1>
                <h3>Let us play music</h3>
                <Progress
					progress={this.state.progress}
                >
                </Progress>
            </div>
        );
    }
});

export default Root;
