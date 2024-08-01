using {com.pacg.cssp as db} from '../db/TechnicalTablesDB';

@path: '/service/parameters'
service ParametersService {
  @odata.draft.enabled
  @restrict: [
    {
      grant: ['READ'],
      to   : ['PortalUser']
    },
    {
      grant: [
        'READ',
        'WRITE'
      ],
      to   : ['PortalAdmin'],
    }
  ]
  entity parameters as
    projection on db.Parameters {
      *
    };
};
