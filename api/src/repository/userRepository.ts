import { getRepository } from "typeorm";
import { User } from "../entity/User";

class UserRepository {

    userRepository = getRepository(User);

    all = async () => {
        return this.userRepository.find();
    }

    one = async (id) => {
        return this.userRepository.findOne(id);
    }

    save = async (user) => {
        return this.userRepository.save(user);
    }

    remove = async (id) => {
        let userToRemove = await this.userRepository.findOne(id);
        await this.userRepository.remove(userToRemove);
    }
}

export default UserRepository