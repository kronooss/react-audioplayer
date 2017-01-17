import React from 'react';
import Button from './components/button';

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
			console.log(e.jPlayer.status.currentTime);
		});
	},
	getInitialState() {
		return {		
			count: 0
		}
	},
	counterHandler() {
		console.log('hello');
		this.setState({
			count: this.state.count + 1
		});
	},
    render() {
        return (
            <div>
                <p>hello world，welcome to the React lesson~</p>
                <Button></Button>
            </div>
        );
    }
});

export default Root;
