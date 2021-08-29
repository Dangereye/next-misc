export default function hendler(req, res) {
  res.setPreviewData({ user: "Craig" });
  res.redirect("/news");
}
