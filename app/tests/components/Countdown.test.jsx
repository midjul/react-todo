var React=require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $=require('jquery');
var TestUtils=require('react-addons-test-utils');

var CountDown=require('CountDown');

describe('CountDown', ()=>{
 it('should exist', ()=>{
   expect(CountDown).toExist();
 });



describe('handleSetCountdown', ()=>{
    it('should set state to started and countdown', (done)=>{
    var countdown=TestUtils.renderIntoDocument(<CountDown/>);
    countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

     setTimeout(()=>{
       expect(countdown.state.count).toBe(9);
       done();
     },1001);

    });


    it('should not set count to negative number', (done)=>{
    var countdown=TestUtils.renderIntoDocument(<CountDown/>);
    countdown.handleSetCountdown(1);


     setTimeout(()=>{
       expect(countdown.state.count).toBe(0);
       done();
     },3001);

    });

    it('shuld pause coundown on paused status', (done)=>{
        var countdown =TestUtils.renderIntoDocument(<CountDown/>);
       countdown.handleSetCountdown(3);
       countdown.handleStatusChange('paused');

       setTimeout(()=>{
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
       }, 1001);


    });


    it('shuld set coundown to 0 on stopped status', (done)=>{
        var countdown =TestUtils.renderIntoDocument(<CountDown/>);
       countdown.handleSetCountdown(3);
       countdown.handleStatusChange('stopped');

       setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
       }, 1001);


    });



});

});
