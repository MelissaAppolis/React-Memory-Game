(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),o=(a(14),a(8)),c=a(2),l=a(3),d=a(1),u=a(5),h=a(4);a(15);function m(t){for(var e,a,n=t.slice(),s=n.length,r=Math.pow(n.length,2)-1;r>0;r--){var i=Math.floor(r/s),o=r%s,c=(e=0,a=r,Math.floor(Math.random()*(a-e+1))+e),l=Math.floor(c/s),d=c%s,u=[n[l][d],n[i][o]];n[i][o]=u[0],n[l][d]=u[1]}return n}var b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={board:n.props.board},n.createCards=n.createCards.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"createCards",value:function(){var t=this;return this.state.board.slice().map((function(e,a){return s.a.createElement("div",{key:a+100,className:"board__row"},e.map((function(e,n){return s.a.createElement("div",{key:a+n,className:"board__card board__card--hidden",onClick:t.props.handleClick},e)})))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"board"},this.createCards())}}]),a}(s.a.Component),p=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("button",{className:"Reset__button",onClick:this.props.resetApp},"Reset Board")}}]),a}(s.a.Component),f=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).formatTime=n.formatTime.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"formatTime",value:function(t){var e=Math.floor(t/60);return t%=60,e<10&&(e="0".concat(e)),t<10&&(t="0".concat(t)),"".concat(e,":").concat(t)}},{key:"render",value:function(){return s.a.createElement("div",{className:"scoreboard"},s.a.createElement("p",null,this.props.pairsFound,"/",this.props.numPairs," Pairs Found"),s.a.createElement("p",null,"Current time: ",this.props.time?this.formatTime(this.props.time):"00:00"),s.a.createElement("p",null,"Best time: ",isFinite(this.props.bestTime)?this.formatTime(this.props.bestTime):"N/A"))}}]),a}(s.a.Component),v=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).onClose=function(e){t.props.onClose&&t.props.onClose(e)},t}return Object(l.a)(a,[{key:"render",value:function(){return this.props.show?s.a.createElement("div",{class:"instructionsModal",id:"instructionsModal"},s.a.createElement("h2",null,"Instructions"),s.a.createElement("div",{class:"content"},this.props.children),s.a.createElement("div",{class:"actions"},s.a.createElement("button",{class:"close-button",onClick:this.onClose},"Ok"))):null}}]),a}(s.a.Component),k=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={show:!1},n.showInstructions=function(t){n.setState({show:!n.state.show})},n.state={bestTime:1/0,board:m([[1,1,2,2,3,3],[4,4,5,5,6,6],[7,7,8,8,9,9],[10,10,11,11,12,12],[13,13,14,14,15,15],[16,16,17,17,18,18]]),lastClicked:null,pairsFound:0,time:0,timerID:null},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.checkGameState=n.checkGameState.bind(Object(d.a)(n)),n.numPairsOnBoard=n.numPairsOnBoard.bind(Object(d.a)(n)),n.resetApp=n.resetApp.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"numPairsOnBoard",value:function(){return Math.pow(this.state.board.length,2)/2}},{key:"checkGameState",value:function(){this.state.pairsFound===Math.pow(this.state.board.length,2)/2&&((!isFinite(this.state.bestTime)||this.state.time<this.state.bestTime)&&this.setState({bestTime:this.state.time}),this.resetApp(),alert("Congraulations you won"))}},{key:"resetApp",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&e.preventDefault(),clearInterval(this.state.timerID),this.setState({timerID:null}),Object(o.a)(document.querySelectorAll(".board__card")).forEach((function(t){t.classList.remove("board__card--found"),t.classList.remove("board__card--active"),t.classList.add("board__card--hidden"),t.dataset.found="false"})),setTimeout((function(){t.setState({board:m(t.state.board),lastClicked:null,pairsFound:0,time:0})}),200)}},{key:"handleClick",value:function(t){var e=this,a=t.target;if(0===this.state.time&&null===this.state.timerID){var n=setInterval((function(){e.setState({time:e.state.time+1})}),1e3);this.setState({timerID:n})}this.state.lastClicked!==a&&"true"!==t.target.dataset.found&&(a.classList.remove("board__card--hidden"),a.classList.add("board__card--active"),setTimeout((function(){if(e.state.lastClicked){var t=e.state.lastClicked;t.textContent===a.textContent?(e.setState({pairsFound:e.state.pairsFound+1}),a.classList.remove("board__card--active"),a.classList.add("board__card--found"),t.classList.remove("board__card--active"),t.classList.add("board__card--found"),t.dataset.found="true",a.dataset.found="true",e.checkGameState()):(a.classList.remove("board__card--active"),a.classList.add("board__card--hidden"),t.classList.remove("board__card--active"),t.classList.add("board__card--hidden")),e.setState({lastClicked:null})}else e.setState({lastClicked:a})}),600))}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"MEMORY GAME ",s.a.createElement("button",{class:"toggle-button",id:"centered-toggle-button",onClick:function(e){t.showInstructions(e)}},"Instructions")),s.a.createElement(v,{onClose:this.showInstructions,show:this.state.show},s.a.createElement("p",null,"Click the green cards to see what number they uncover and try to find the matching number underneath the other cards."),s.a.createElement("p",null,"Uncover two matching symbols at once to eliminate them from the game."),s.a.createElement("p",null,"The game ends when all of the pairs of matching cards are found."),s.a.createElement("p",null,"Eliminate all cards as fast as you can in order to win best time stamp!"),s.a.createElement("p",null,"You can reset the game by clicking the Reset button and the cards will be reshuffled and the timer will be stopped until the game is started again.")),s.a.createElement(f,{numPairs:this.numPairsOnBoard(),pairsFound:this.state.pairsFound,time:this.state.time,bestTime:this.state.bestTime}),s.a.createElement(b,{board:this.state.board,handleClick:this.handleClick}),s.a.createElement(p,{resetApp:this.resetApp}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);document.body.classList.add("body"),document.querySelector("html").classList.add("html"),i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e66f7ff8.chunk.js.map