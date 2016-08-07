describe('Game', function() {
  beforeEach(function() {
    game = new Game();
  });

  it('it has 10 frames per game', function() {
    expect(game.frames).toEqual(10);
  });

});
