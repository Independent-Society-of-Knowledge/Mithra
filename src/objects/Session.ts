import type {Block} from "./Block.ts";


export type Session = {
    id: Number,
    title: String,
    blocks: Block[],
    createdAt: Date,
    author: String,
    collaborators: String[],
}