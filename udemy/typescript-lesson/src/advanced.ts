type Engineer = {
    name: string;
    role: string;

}
type Blogger = {
    name: string;
    follower: number;
}

// インターセクション型
type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger{};

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}