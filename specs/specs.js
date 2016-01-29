describe('pingPong', function() {
  it("will count up to the user input number", function() {
    expect(pingPong(2)).to.eql([1,2]);
  });
  it("will replace multiples of 3 with 'ping'", function() {
    expect(pingPong(4)).to.eql([1,2,"ping",4]);
  });
  it("will replace multiples of 5 with 'pong'", function() {
    expect(pingPong(5)).to.eql([1,2,"ping",4,"pong"]);
  });
  it("will replace multiples of 15 with 'pingpong'", function() {
    expect(pingPong(16)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong",16]);
  });
});
