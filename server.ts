import cds from '@sap/cds';

const bootstrapLogger = cds.log('bootstrap');

cds.once('bootstrap', () => {
  bootstrapLogger.info(`Self-Service Portal backend application bootstrap.`);
});

cds.once('listening', () => {
  bootstrapLogger.info(`Self-Service Portal backend application listening.`);
});
