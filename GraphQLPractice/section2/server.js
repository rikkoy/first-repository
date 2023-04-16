const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQLスキーマ言語を記述してスキーマを構築する
// スキーマはあくまで定義のみで実際のデータ操作は行わない
const schema = buildSchema(`
    type Query {
        quoteOfTheDay: String
        random: Float!
        rollThreeDice: [Int]
    }
`);
// リゾルバ関数
// リゾルバ関数とは特定のフィールドのデータを返す関数（メソッド）であり、実際のデータ操作を行う部分
const root = {
    // スキーマで定義した「quoteOfTheDay」のデータ操作
    quoteOfTheDay: () => {
        return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    // スキーマで定義した「random」のデータ操作
    random: () => {
        return Math.random();
    },
    // スキーマで定義した「rollThreeDice」のデータ操作
    rollThreeDice: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },
};

// Expressでサーバーを立てます
// graphiql:trueとしたので、GraphQLを利用できる
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http:// localhost:4000/graphql');