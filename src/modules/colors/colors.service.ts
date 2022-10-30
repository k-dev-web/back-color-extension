import {Injectable, Inject} from '@nestjs/common';

const {Op} = require("sequelize");
import {Colors} from './colors.entity';
import {ColorsDto} from './dto/colors.dto';
import sequelize from "sequelize";

@Injectable()
export class ColorsService {
    constructor(@Inject('colors') private readonly colorsRepository: typeof Colors) {
    }

    async create(colors: ColorsDto): Promise<Colors> {
        return await this.colorsRepository.create<Colors>(colors);
    }

    async findAll(page: number): Promise<any> {
        let countSite = await this.colorsRepository.findAll<Colors>({
            attributes: ['domain', [sequelize.fn('COUNT', sequelize.col('domain')), 'domainCount']],
            group: ['domain']

        })
        let countColors = await this.colorsRepository.findAll<Colors>({
            attributes: ['hex', [sequelize.fn('COUNT', sequelize.col('hex')), 'hexCount']],
            group: ['hex']
        })
        let colorsList = await this.colorsRepository.findAll<Colors>({
            limit:20,
            offset:(page-1)*20
        });
        let countItems =await this.colorsRepository.count()
        countSite.sort((item1:any,item2:any)=>item1.domainCount<item2.domainCount?1:-1)
        countColors.sort((item1:any,item2:any)=>item1.hexCount<item2.hexCount?1:-1)
        return {countSite, colorsList, countColors, countItems};
    }


}
