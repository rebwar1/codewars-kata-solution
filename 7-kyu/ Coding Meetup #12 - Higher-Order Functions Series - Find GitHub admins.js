function findAdmin(list, lang) {
  return list.filter(function (dev) {
    return dev.language == lang && dev.githubAdmin == "yes";
  });
}
