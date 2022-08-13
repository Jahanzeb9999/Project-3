declare const SolidityLexer_base: any;
declare class SolidityLexer extends SolidityLexer_base {
    [x: string]: any;
    static grammarFileName: string;
    static channelNames: string[];
    static modeNames: string[];
    static literalNames: (string | null)[];
    static symbolicNames: (string | null)[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    get atn(): any;
}
declare namespace SolidityLexer {
    const EOF: any;
    const T__0: number;
    const T__1: number;
    const T__2: number;
    const T__3: number;
    const T__4: number;
    const T__5: number;
    const T__6: number;
    const T__7: number;
    const T__8: number;
    const T__9: number;
    const T__10: number;
    const T__11: number;
    const T__12: number;
    const T__13: number;
    const T__14: number;
    const T__15: number;
    const T__16: number;
    const T__17: number;
    const T__18: number;
    const T__19: number;
    const T__20: number;
    const T__21: number;
    const T__22: number;
    const T__23: number;
    const T__24: number;
    const T__25: number;
    const T__26: number;
    const T__27: number;
    const T__28: number;
    const T__29: number;
    const T__30: number;
    const T__31: number;
    const T__32: number;
    const T__33: number;
    const T__34: number;
    const T__35: number;
    const T__36: number;
    const T__37: number;
    const T__38: number;
    const T__39: number;
    const T__40: number;
    const T__41: number;
    const T__42: number;
    const T__43: number;
    const T__44: number;
    const T__45: number;
    const T__46: number;
    const T__47: number;
    const T__48: number;
    const T__49: number;
    const T__50: number;
    const T__51: number;
    const T__52: number;
    const T__53: number;
    const T__54: number;
    const T__55: number;
    const T__56: number;
    const T__57: number;
    const T__58: number;
    const T__59: number;
    const T__60: number;
    const T__61: number;
    const T__62: number;
    const T__63: number;
    const T__64: number;
    const T__65: number;
    const T__66: number;
    const T__67: number;
    const T__68: number;
    const T__69: number;
    const T__70: number;
    const T__71: number;
    const T__72: number;
    const T__73: number;
    const T__74: number;
    const T__75: number;
    const T__76: number;
    const T__77: number;
    const T__78: number;
    const T__79: number;
    const T__80: number;
    const T__81: number;
    const T__82: number;
    const T__83: number;
    const T__84: number;
    const T__85: number;
    const T__86: number;
    const T__87: number;
    const T__88: number;
    const T__89: number;
    const T__90: number;
    const T__91: number;
    const T__92: number;
    const T__93: number;
    const T__94: number;
    const Int: number;
    const Uint: number;
    const Byte: number;
    const Fixed: number;
    const Ufixed: number;
    const BooleanLiteral: number;
    const DecimalNumber: number;
    const HexNumber: number;
    const NumberUnit: number;
    const HexLiteralFragment: number;
    const ReservedKeyword: number;
    const AnonymousKeyword: number;
    const BreakKeyword: number;
    const ConstantKeyword: number;
    const ImmutableKeyword: number;
    const ContinueKeyword: number;
    const LeaveKeyword: number;
    const ExternalKeyword: number;
    const IndexedKeyword: number;
    const InternalKeyword: number;
    const PayableKeyword: number;
    const PrivateKeyword: number;
    const PublicKeyword: number;
    const VirtualKeyword: number;
    const PureKeyword: number;
    const TypeKeyword: number;
    const ViewKeyword: number;
    const ConstructorKeyword: number;
    const FallbackKeyword: number;
    const ReceiveKeyword: number;
    const Identifier: number;
    const StringLiteralFragment: number;
    const VersionLiteral: number;
    const WS: number;
    const COMMENT: number;
    const LINE_COMMENT: number;
}
export default SolidityLexer;
