// import { HttpException, Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import {
//   Medical,
//   MedicalDetail,
//   MedicalDetailDocument,
//   MedicalDetails,
//   MedicalDetailsDocument,
//   MedicalDocument,
// } from 'src/schemas';
// import { GetDto } from 'src/utils/dto';
// import { SymbolTypes } from 'src/utils/enum';
// import { Messages } from 'src/utils/strings';
// import { MedicalDetailDto, MedicalDetailsDto, MedicalDto } from './medical.dto';

// @Injectable()
// export class MedicalService {
//   constructor(
//     @InjectModel(Medical.name) private model: Model<MedicalDocument>,
//     @InjectModel(MedicalDetail.name)
//     private detailModel: Model<MedicalDetailDocument>,
//     @InjectModel(MedicalDetails.name)
//     private detailsModel: Model<MedicalDetailsDocument>,
//   ) {}

//   async find(dto: GetDto) {
//     try {
//       return this.model
//         .find({}, '_id title text')
//         .limit(dto.limit)
//         .skip(dto.limit * (dto.page < 1 ? 1 : dto.page - 1))
//         .exec();
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async findDetail() {
//     try {
//       return this.detailModel.find();
//       // .limit(dto.limit)
//       // .skip(dto.limit * (dto.page < 1 ? 1 : dto.page - 1))
//       // .exec();
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async findDetails() {
//     try {
//       return this.detailsModel.find({});
//       // .limit(dto.limit)
//       // .skip(dto.limit * (dto.page < 1 ? 1 : dto.page - 1))
//       // .exec();
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async findById(id: string) {
//     try {
//       return this.model.findById(id);
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async findSymbol(type: SymbolTypes, dto: GetDto) {
//     try {
//       return this.model
//         .find({ symbols: type }, '_id title text')
//         .limit(dto.limit)
//         .skip(dto.limit * (dto.page < 1 ? 1 : dto.page - 1))
//         .exec();
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   //   async findDetailsType(type: SymbolTypes, dto: GetDto) {
//   //     try {
//   //       return this.detailsModel
//   //         .find({})
//   //         .limit(dto.limit)
//   //         .skip(dto.limit * (dto.page < 1 ? 1 : dto.page - 1))
//   //         .exec();
//   //     } catch (error) {
//   //       console.log(error);
//   //       throw new HttpException(Messages.occured, 500);
//   //     }
//   //   }
//   //   async findDetailsParent(type: SymbolTypes, dto: GetDto) {
//   //     try {
//   //       return this.model
//   //         .find({ symbols: type })
//   //         .limit(dto.limit)
//   //         .skip(dto.limit * (dto.page < 1 ? 1 : dto.page - 1))
//   //         .exec();
//   //     } catch (error) {
//   //       console.log(error);
//   //       throw new HttpException(Messages.occured, 500);
//   //     }
//   //   }

//   async create(dto: MedicalDto) {
//     try {
//       return this.model.create(dto);
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }

//   async createDetail(dto: MedicalDetailDto) {
//     try {
//       return this.detailModel.create(dto);
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async createDetails(dto: MedicalDetailsDto) {
//     try {
//       return this.detailsModel.create(dto);
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }

//   async put(id: string, dto: MedicalDto) {
//     try {
//       return this.model.findByIdAndUpdate(id, {
//         dto,
//       });
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async detailPut(id: string, dto: MedicalDetailDto) {
//     try {
//       return this.detailModel.findByIdAndUpdate(id, {
//         dto,
//       });
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async detailsPut(id: string, dto: MedicalDetailsDto) {
//     try {
//       return this.detailsModel.findByIdAndUpdate(id, {
//         dto,
//       });
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async deleteById(id: string) {
//     try {
//       return this.model.findByIdAndRemove(id);
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async deleteDetailById(id: string) {
//     try {
//       return this.detailModel.findByIdAndRemove(id);
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async deleteDetailsById(id: string) {
//     try {
//       return this.detailsModel.findByIdAndRemove(id);
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async delete() {
//     try {
//       return this.model.deleteMany();
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async deleteDetail() {
//     try {
//       return this.detailModel.deleteMany();
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
//   async deleteDetails() {
//     try {
//       return this.detailsModel.deleteMany();
//     } catch (error) {
//       console.log(error);
//       throw new HttpException(Messages.occured, 500);
//     }
//   }
// }
