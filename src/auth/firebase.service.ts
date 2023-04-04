// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import admin from 'src/common/firebase';
// @Injectable()
// export class FirebaseAuthService {
//   private getToken(authToken: string): string {
//     const match = authToken.match(/^Bearer (.*)$/);
//     if (!match || match.length < 2) {
//       throw new UnauthorizedException('Invalid token!');
//     }
//     return match[1];
//   }
//   public async authCheck(authToken: string): Promise<any> {
//     const token = this.getToken(authToken);
//     try {
//       const firebaseAuth = await admin.auth().verifyIdToken(token);

//     } catch (error) {}
//   }
// }
