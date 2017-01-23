describe("AccountManager", function() {
  var accountManager;

  beforeEach(function() {
    accountManager = new AccountManager();
  });

  it("should be able to deposit an amount", function() {
    accountManager.deposit(100);
    expect(accountManager.balance).toEqual(100);
  });

  it("should be able to withdraw an amount", function() {
    accountManager.balance = 100;
    accountManager.withdraw(50);
    expect(accountManager.balance).toEqual(50);
  })

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });
  //
  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });
  //
  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });


});
