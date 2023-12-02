// import {
//   Controller,
//   Post,
//   Get,
//   Put,
//   Body,
//   Delete,
//   UseGuards,
//   Param,
//   UseInterceptors,
//   UploadedFile,
// } from '@nestjs/common';
// import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
// import { MedicalService } from './medical.service';
// import { GetDto } from 'src/utils/dto';
// import { SymbolTypes } from 'src/utils/enum';
// import { AuthGuard } from 'src/guards/auth.guard';
// import { MedicalDetailDto, MedicalDetailsDto, MedicalDto } from './medical.dto';
// import { FileInterceptor } from '@nestjs/platform-express';
// @Controller('medical')
// @ApiTags('Medical')
// export class MedicalController {
//   constructor(private service: MedicalService) {}

//   @Post()
//   findAll(@Body() dto: GetDto) {
//     return this.service.find(dto);
//   }

//   @Post('/type/:type')
//   @ApiParam({ name: 'type' })
//   findSymbol(@Param('type') type: SymbolTypes, @Body() dto: GetDto) {
//     return this.service.findSymbol(type, dto);
//   }

//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Post('/create')
//   create(@Body() dto: MedicalDto) {
//     return this.service.create(dto);
//   }

//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Post('/detail/create')
//   createDetail(@Body() dto: MedicalDetailDto) {
//     return this.service.createDetail(dto);
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Post('/details/create')
//   createDetails(@Body() dto: MedicalDetailsDto) {
//     return this.service.createDetails(dto);
//   }

//   @Get('get/:id')
//   @ApiParam({ name: 'id' })
//   findById(@Param('id') id: string) {
//     return this.service.findById(id);
//   }
//   @Get('detail')
//   finnDetail() {
//     return this.service.findDetail();
//   }
//   @Get('details')
//   finnDetails() {
//     return this.service.findDetails();
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Put('edit/:id')
//   @ApiParam({ name: 'id' })
//   put(@Param('id') id: string, dto: MedicalDto) {
//     return this.service.put(id, dto);
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Put('edit/:id')
//   @ApiParam({ name: 'id' })
//   detailPut(@Param('id') id: string, dto: MedicalDetailDto) {
//     return this.service.detailPut(id, dto);
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Put('edit/:id')
//   @ApiParam({ name: 'id' })
//   detailsPut(@Param('id') id: string, dto: MedicalDetailsDto) {
//     return this.service.detailsPut(id, dto);
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Delete('delete/:id')
//   @ApiParam({ name: 'id' })
//   deleteById(@Param('id') id: string) {
//     return this.service.deleteById(id);
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Delete('delete')
//   delete() {
//     return this.service.delete();
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Delete('/detail/:id')
//   @ApiParam({ name: 'id' })
//   deleteDetailById(@Param('id') id: string) {
//     return this.service.deleteDetailById(id);
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Delete('detail')
//   deleteDetail() {
//     return this.service.deleteDetail();
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Delete('details/:id')
//   @ApiParam({ name: 'id' })
//   deleteDetailsById(@Param('id') id: string) {
//     return this.service.deleteDetailsById(id);
//   }
//   @ApiBearerAuth('access-token')
//   @UseGuards(AuthGuard)
//   @Delete('details')
//   deleteDetails() {
//     return this.service.deleteDetails();
//   }
// }
