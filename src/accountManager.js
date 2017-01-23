function AccountManager() {
    this.balance = 0;
}
AccountManager.prototype.deposit = function(credit) {
  this.balance += credit;
};

AccountManager.prototype.withdraw = function(debit) {
  this.balance -= debit;
};
// AccountManager.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// AccountManager.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// AccountManager.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
