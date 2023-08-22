import { Body, Controller, Get, Post, Res, Patch, Param, Delete } from '@nestjs/common';
import * as path from 'path'; // Use '*' to import the entire module
import * as fs from 'fs'; // Use '*' to import the entire module

// const dataUser = path.join(process.cwd(), 'src', 'starter', 'user.json');
const dataUser = path.join(__dirname, '../../src/starter/user.json');
@Controller('/api/v1/users')
export class UserController {
  @Get()
  async getUser(@Res() res) {
    try {
      const data = await fs.promises.readFile(dataUser, 'utf8');
      const jsonData = JSON.parse(data);
      // console.log(jsonData);

      return res.json(jsonData); // Gửi phản hồi JSON
    } catch (err) {
      console.error('Lỗi khi đọc tệp JSON:', err);
      res.status(500).json({ error: 'Lỗi máy chủ nội bộ' }); // Gửi phản hồi lỗi
    }
  }

  @Post()
  async postUser(@Res() res, @Body() body) {
    try {
      const data = await fs.promises.readFile(dataUser, 'utf8');
      const jsonData = JSON.parse(data);
      jsonData.push(body);
      await fs.promises.writeFile(dataUser, JSON.stringify(jsonData));

      return res.json(jsonData); // Gửi phản hồi JSON
    } catch (err) {
      console.error('Lỗi khi đọc tệp JSON:', err);
      res.status(500).json({ error: 'Lỗi máy chủ nội bộ' }); // Gửi phản hồi lỗi
    }
  }

  @Patch('/:id')
  async UpdateUser(@Res() res, @Body() body, @Param() params) {
    try {
      const data = await fs.promises.readFile(dataUser, 'utf8');
      const jsonData = JSON.parse(data);
      const indexUser = jsonData.findIndex((user) => user._id === params.id);
      console.log(indexUser);
      if (indexUser !== -1) {
        jsonData[indexUser] = { ...jsonData[indexUser], ...body };
      }
      await fs.promises.writeFile(dataUser, JSON.stringify(jsonData));
      return res.json(jsonData); // Gửi phản hồi JSON
    } catch (err) {
      console.error('Lỗi khi đọc tệp JSON:', err);
      res.status(500).json({ error: 'Lỗi máy chủ nội bộ' }); // Gửi phản hồi lỗi
    }
  }

  @Delete(`/:id`)
  async deleteUser(@Res() res, @Param() params) {
    try {
      const data = await fs.promises.readFile(dataUser, 'utf8');
      let jsonData = JSON.parse(data);
      const indexUser = jsonData.findIndex((user) => user._id === params.id);
      // console.log(indexUser);
      if (indexUser !== -1) {
        jsonData = jsonData.filter((user) => user._id !== params.id)
      }
      await fs.promises.writeFile(dataUser, JSON.stringify(jsonData));
      return res.json(jsonData); // Gửi phản hồi JSON
    } catch (err) {
      console.error('Lỗi khi đọc tệp JSON:', err);
      res.status(500).json({ error: 'Lỗi máy chủ nội bộ' }); // Gửi phản hồi lỗi
    }
  }
}
