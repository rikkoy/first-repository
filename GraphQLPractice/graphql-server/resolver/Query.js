const Query = {
    posts(parent, args, { db }, info) {
        // クエリを書いたときに引数がないときは、模擬データベースの内容をすべて返す
        if (!args.query) {
            return db.posts
            // クエリを書いたときに引数がある時は引数とtitle or authorが一致したデータを表示
        } else {
            return db.posts.filter((post) => {
                const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
                const isAuthorMatch = post.author.toLowerCase().includes(args.query.toLowerCase())
                return isTitleMatch || isAuthorMatch
            })
        }
    }
}

module.exports = Query;
