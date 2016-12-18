var React=require('react');
var {Link, IndexLink}= require('react-router');


var Nav= React.createClass({
render:function () {
   return (
     <div className="top-bar">
     <div className="top-bar-left">

     <ul className="menu">
       <li className="menu-text">React Timer App</li>
       <li>
         <IndexLink to='/timer' activeClassName="active-link" >Timer</IndexLink>
         </li>
       <li>
         <Link to='/countdown' activeClassName="active-link" >Countdown</Link>
       </li>
     </ul>

   </div>
   <div className="top-bar-right">
    <p><span className="menu-text">Created by</span> <a href="https://github.com/midjul" target="_blank">Midhet Đulović</a></p>
   </div>
</div>
   );
}
});

module.exports=Nav;
