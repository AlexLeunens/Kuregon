import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

class PostRepository {

    postRepository = getRepository(Post);

    all = async () => {
        return this.postRepository.find();
    }

    one = async (id) => {
        return this.postRepository.findOne(id);
    }

    save = async (post) => {
        return this.postRepository.save(post);
    }

    remove = async (id) => {
        let postToRemove = await this.postRepository.findOne(id);
        await this.postRepository.remove(postToRemove);
    }
}

export default PostRepository