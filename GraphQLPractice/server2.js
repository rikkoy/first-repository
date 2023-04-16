const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQLスキーマ言語を記述してスキーマを構築する
// スキーマに引数を指定している
const schema = buildSchema(`
    type Query {
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);
// リゾルバ関数
// リゾルバ関数とは特定のフィールドのデータを返す関数（メソッド）であり、実際のデータ操作を行う部分
const root = {
    // クライアント側のクエリから引数の値を受け取る
    rollDice: ({ numDice, numSides }) => {
        let output = [];
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    }
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